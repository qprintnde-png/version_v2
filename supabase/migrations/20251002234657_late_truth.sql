/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `date` (date)
      - `author` (text)
      - `author_role` (text)
      - `category` (text)
      - `excerpt` (text)
      - `content` (text)
      - `image` (text)
      - `tags` (text array)
      - `published` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin write access
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  date date DEFAULT CURRENT_DATE,
  author text NOT NULL,
  author_role text NOT NULL,
  category text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image text,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_categories
CREATE POLICY "Anyone can read blog categories"
  ON blog_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage categories"
  ON blog_categories
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for blog_posts
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Authenticated users can read all blog posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blog_posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO blog_categories (name) VALUES
  ('Technology Trends'),
  ('Implementation'),
  ('Communication'),
  ('Security'),
  ('Business Impact'),
  ('Mobile Technology')
ON CONFLICT (name) DO NOTHING;

-- Insert sample blog posts (migrating from static data)
INSERT INTO blog_posts (
  title, slug, date, author, author_role, category, excerpt, content, image, tags, published
) VALUES
(
  'The Future of Educational Technology in Bangladesh',
  'future-educational-technology-bangladesh',
  '2025-01-15',
  'Fazle Rabbi Limon',
  'CEO, SchoolxNow',
  'Technology Trends',
  'Exploring how emerging technologies are reshaping the educational landscape in Bangladesh and what institutions need to know to stay ahead.',
  '<p>The educational landscape in Bangladesh is undergoing a remarkable transformation, driven by technological innovations that are reshaping how institutions operate and students learn. As we look toward the future, several key trends are emerging that will define the next decade of educational technology.</p>

<h2>Digital Infrastructure Development</h2>
<p>Bangladesh has made significant strides in developing its digital infrastructure, with improved internet connectivity and mobile penetration reaching unprecedented levels. This foundation is enabling educational institutions to adopt cloud-based solutions and digital learning platforms at scale.</p>

<h2>AI-Powered Learning Analytics</h2>
<p>Artificial intelligence is revolutionizing how we understand student performance and learning patterns. Our latest AI modules can predict student outcomes, identify at-risk learners, and provide personalized learning recommendations that improve academic success rates by up to 35%.</p>

<h2>Mobile-First Education Solutions</h2>
<p>With over 180 million mobile users in Bangladesh, mobile-first educational solutions are becoming essential. Our mobile applications enable seamless communication between parents, teachers, and students, ensuring that education continues beyond the classroom walls.</p>

<h2>Blockchain for Academic Credentials</h2>
<p>The implementation of blockchain technology for academic credentials is gaining momentum. This technology ensures tamper-proof certificates and enables instant verification of academic achievements, which is particularly valuable for students pursuing higher education abroad.</p>

<p>As we continue to innovate and adapt to these technological advances, SchoolxNow remains committed to providing cutting-edge solutions that empower educational institutions across Bangladesh to achieve excellence in the digital age.</p>',
  'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Technology', 'Education', 'Bangladesh', 'AI', 'Future'],
  true
),
(
  'Implementing School Management Systems: A Complete Guide',
  'implementing-school-management-systems-guide',
  '2025-01-10',
  'Md. Sabbir Hossain',
  'CTO, SchoolxNow',
  'Implementation',
  'A comprehensive guide for educational institutions planning to implement digital school management systems, covering planning, execution, and best practices.',
  '<p>Implementing a school management system is a transformative journey that requires careful planning, stakeholder engagement, and strategic execution. This comprehensive guide will walk you through the essential steps to ensure a successful implementation.</p>

<h2>Phase 1: Assessment and Planning</h2>
<p>Before selecting a school management system, conduct a thorough assessment of your institution''s current processes, pain points, and future goals. This includes:</p>
<ul>
<li>Evaluating existing workflows and identifying inefficiencies</li>
<li>Gathering requirements from all stakeholders</li>
<li>Setting clear objectives and success metrics</li>
<li>Establishing a realistic timeline and budget</li>
</ul>

<h2>Phase 2: System Selection</h2>
<p>Choosing the right system is crucial for long-term success. Consider factors such as:</p>
<ul>
<li>Scalability to accommodate future growth</li>
<li>Integration capabilities with existing systems</li>
<li>User-friendly interface for all stakeholders</li>
<li>Vendor support and training offerings</li>
<li>Total cost of ownership</li>
</ul>

<p>Remember, successful implementation is not just about technology—it''s about people, processes, and continuous improvement. With proper planning and execution, your school management system will become a powerful tool for educational excellence.</p>',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  ARRAY['Implementation', 'Guide', 'School Management', 'Best Practices'],
  true
)
ON CONFLICT (slug) DO NOTHING;