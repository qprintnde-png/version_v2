import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our blog system
export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  author: string
  author_role: string
  category: string
  excerpt: string
  content: string
  image?: string
  tags: string[]
  published: boolean
  created_at: string
  updated_at: string
}

export interface BlogCategory {
  id: string
  name: string
  created_at: string
}

// Types for contact form system
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  institution: string
  title?: string
  subject: string
  message: string
  status?: 'new' | 'in_progress' | 'resolved' | 'closed'
  created_at?: string
  updated_at?: string
}

// Blog API functions
export const blogApi = {
  // Get all published blog posts
  async getPosts(category?: string, searchTerm?: string): Promise<BlogPost[]> {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('date', { ascending: false })

    if (category && category !== 'All') {
      query = query.eq('category', category)
    }

    if (searchTerm) {
      query = query.or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,tags.cs.{${searchTerm}}`)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching blog posts:', error)
      throw error
    }

    return data || []
  },

  // Get a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // Post not found
      }
      console.error('Error fetching blog post:', error)
      throw error
    }

    return data
  },

  // Get all categories
  async getCategories(): Promise<BlogCategory[]> {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name')

    if (error) {
      console.error('Error fetching categories:', error)
      throw error
    }

    return data || []
  },

  // Get related posts (same category, excluding current post)
  async getRelatedPosts(currentPostId: string, category: string, limit: number = 3): Promise<BlogPost[]> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .eq('category', category)
      .neq('id', currentPostId)
      .order('date', { ascending: false })
      .limit(limit)

    if (error) {
      console.error('Error fetching related posts:', error)
      throw error
    }

    return data || []
  },

  // Admin functions (require authentication)
  async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single()

    if (error) {
      console.error('Error creating blog post:', error)
      throw error
    }

    return data
  },

  async updatePost(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating blog post:', error)
      throw error
    }

    return data
  },

  async deletePost(id: string): Promise<void> {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting blog post:', error)
      throw error
    }
  }
}

// Contact API functions
export const contactApi = {
  // Submit a new contact form
  async submitContactForm(submission: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>): Promise<ContactSubmission> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ ...submission, status: 'new' }])
      .select()
      .single()

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }

    return data
  },

  // Get contact submissions (admin)
  async getContactSubmissions(status?: string): Promise<ContactSubmission[]> {
    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching contact submissions:', error)
      throw error
    }

    return data || []
  },

  // Update submission status (admin)
  async updateSubmissionStatus(id: string, status: ContactSubmission['status']): Promise<ContactSubmission> {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating submission status:', error)
      throw error
    }

    return data
  }
}