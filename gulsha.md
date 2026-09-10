COMPLETE DEVELOPMENT PROMPT — PREMIUM ARTIST PAINTING GALLERY
Design and build a premium, highly responsive digital art gallery web application using React.

The application is for an artist who wants to display paintings in multiple categories, where the Admin manages all categories, stories, artwork, themes, artist information, and settings, while normal visitors can browse the gallery without signing in.

The website should feel like a beautiful digital art exhibition / museum catalogue / artist studio, rather than a generic portfolio or e-commerce website.

The paintings must remain the primary visual focus.

1. CORE OBJECTIVE
Build a complete React-based artist gallery with two access levels:

Public Viewer
Visitors can:

Browse the website without signing in
Browse all painting categories
Read the story behind each category
Browse paintings within each category
Open individual paintings
Zoom into paintings comfortably
Pan around zoomed artwork
View artwork metadata
View artist information
Navigate between categories
Use the website on mobile, tablet, laptop, desktop, and large screens
Admin
Admin can sign in and manage:

Categories
Category stories
Category themes
Paintings
Painting metadata
Painting images
Artist profile
Website appearance
Gallery ordering
Featured paintings
Publishing visibility
Google Drive artwork storage/settings
Normal visitors must never be required to sign in.

2. TECHNOLOGY STACK
Use a modern React architecture.

Recommended stack:

React
React Router
TypeScript preferred
Tailwind CSS or modern CSS architecture
Component-based architecture
Responsive CSS
Proper state management
Form validation
Lazy loading
Optimized image loading
Accessible UI
Secure authentication architecture
Use clean reusable components.

Do not create one huge component containing the entire application.

3. GOOGLE DRIVE ARTWORK STORAGE — VERY IMPORTANT
Artwork images must be stored in Google Drive
Every painting image uploaded through the Admin module must ultimately be stored in Google Drive.

The application should NOT depend on storing the original artwork images directly inside the React application's public/static folder.

Required flow
Admin:

Admin Login

↓

Add/Edit Painting

↓

Select Image

↓

Upload Image

↓

Google Drive

↓

Store Google Drive file ID / required metadata

↓

Painting record references the Drive file

↓

Public Gallery displays the artwork

4. GOOGLE DRIVE ARCHITECTURE
Create a dedicated Google Drive integration layer.

Do not tightly couple Google Drive API logic directly into UI components.

Create a service/API abstraction such as:

GoogleDriveService

or:

driveService

This layer should handle:

Authentication/authorization
Upload
File lookup
File metadata
File ID
Folder management
Delete/archive
Image URL generation where supported
Error handling
Retry handling
The React UI should communicate with the application's backend/API layer rather than exposing sensitive Google credentials in frontend code.

5. GOOGLE DRIVE FOLDER ORGANIZATION
Create a logical Drive folder structure.

Suggested:

Artist Gallery
│
├── Categories
│
├── Paintings
│   ├── Abstract
│   ├── Nature
│   ├── Portraits
│   ├── Landscapes
│   └── Other Categories
│
├── Artist Profile
│
└── Website Assets

The exact folder structure can be implemented dynamically.

When an Admin creates a category, the application may optionally create a corresponding Google Drive folder.

When an Admin uploads a painting into that category, store the artwork inside the appropriate category folder.

6. GOOGLE DRIVE SECURITY
This is extremely important.

Do NOT expose:

Google OAuth client secrets
Service-account private keys
API secrets
Refresh tokens
Administrative credentials
inside frontend React code.

Google Drive authentication should be handled securely through the backend/server/API layer.

Use environment variables for secrets.

Example conceptual configuration:

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_DRIVE_FOLDER_ID=
GOOGLE_REDIRECT_URI=

Do not commit secrets into Git.

Provide a clean abstraction so the Google Drive implementation can be configured without rewriting the gallery UI.

7. GOOGLE DRIVE IMAGE ACCESS
The public website must be able to display published artwork without requiring visitors to log into Google.

The application should use an appropriate secure/public image delivery strategy.

Do not simply expose private Google Drive files to visitors.

Design the backend/storage layer so it can:

Retrieve the Drive file
Verify that it is an approved/published artwork
Provide an appropriate image response/URL to the public gallery
Prevent unauthorized access to unrelated Drive files
If direct Google Drive image URLs are unsuitable for reliable production image delivery, implement a backend image proxy/cache layer.

The architecture should allow future migration to a dedicated CDN/object-storage solution without changing the public React components.

8. IMAGE UPLOAD EXPERIENCE
The Admin painting upload experience must be excellent.

Allow Admin to:

Click to upload
Drag and drop an image
Preview image before upload
See upload progress
Cancel upload if possible
Replace an existing image
Remove an image
See upload success/failure
Retry failed upload
Accepted formats should include appropriate image formats such as:

JPG/JPEG
PNG
WebP
Optionally support:

HEIC
TIFF
if the backend/image-processing pipeline supports them safely.

Validate:

File type
File size
Image dimensions
Show clear validation messages.

9. IMAGE OPTIMIZATION
Paintings may be high-resolution artwork photographs.

Do not force the browser to download unnecessarily huge files for thumbnails.

Implement an image strategy with:

Responsive image sizes
Thumbnail generation
Optimized preview image
High-resolution image when zooming
Lazy loading
Progressive loading where possible
Proper caching
Appropriate compression
Maintain the original high-quality artwork file in Google Drive where required.

The public gallery should use optimized versions for normal browsing.

When the user zooms deeply, provide an appropriately high-resolution version.

10. ADVANCED PAINTING ZOOM — VERY IMPORTANT
The public viewer must have a very user-friendly artwork zoom experience.

This is one of the most important requirements.

Users should be able to inspect paintings closely without struggling with the interface.

Use a professional image viewer/lightbox approach.

The experience should feel similar to viewing artwork in an online museum collection.

11. DESKTOP ZOOM EXPERIENCE
On desktop:

When a user clicks a painting:

Open a large artwork viewer/lightbox.

Provide:

Large artwork
Zoom in
Zoom out
Reset zoom
Fullscreen
Close
Previous painting
Next painting
Also support:

Mouse wheel zoom
Click/drag to pan when zoomed
Double-click to zoom
Keyboard controls where appropriate
Do not make users repeatedly click tiny buttons.

12. MOBILE ZOOM EXPERIENCE
Mobile support is especially important.

Users should be able to:

Pinch to zoom
Drag/pan the zoomed artwork
Double-tap to zoom
Double-tap again to reset or change zoom level
Swipe between paintings where appropriate
Easily close the viewer
The artwork should respond naturally to touch gestures.

Avoid accidental page scrolling while the user is actively zooming/panning the image.

13. TABLET ZOOM EXPERIENCE
On tablets:

Support both:

Touch gestures
Desktop-style controls where applicable
The viewer should automatically adapt to portrait and landscape orientations.

When the device rotates, maintain a sensible zoom position and prevent the artwork from becoming inaccessible.

14. ZOOM UI
The zoom interface should remain minimal.

Possible controls:

−   +   Reset   Fullscreen   Close

Controls should:

Have large touch targets
Have accessible labels
Be visually subtle
Not obscure important artwork
Automatically adapt to light/dark artwork backgrounds
Do not permanently cover large portions of the painting.

Controls can fade slightly when inactive and reappear when the user interacts.

15. ZOOM QUALITY
The image viewer must not create a blurry experience when zooming.

Architecture should support:

High-resolution source image
Optimized preview
High-resolution zoom image
Progressive loading
Loading indicator when high-resolution image is being fetched
If extremely high-resolution artwork is expected, consider a tiled/deep-zoom image architecture so the browser does not need to load the entire enormous image at once.

The architecture should be future-proof for technologies such as:

Image tiles
Deep Zoom
IIIF
CDN image transformation
if the collection becomes very large.

16. GLOBAL VISUAL DESIGN
The website should have an authentic artistic canvas aesthetic.

It should feel:

Warm
Elegant
Minimal
Sophisticated
Organic
Timeless
Museum-like
Editorial
Avoid generic SaaS styling.

Avoid:

Bright gradients
Excessive rounded cards
Heavy shadows
Neon colors
Excessive animations
Corporate dashboard styling
Generic Bootstrap appearance
17. GLOBAL BACKGROUND
Default page background:

Warm off-white natural canvas.

Suggested direction:

#F5F0E6

This is only a starting point.

Create a subtle canvas/paper texture using CSS or a lightweight texture.

The texture must be:

Very subtle
Elegant
Non-distracting
Consistent
Lightweight
Do not use a visually noisy texture.

18. CATEGORY THEMES
Every category must support its own theme.

Each category can have:

Background color
Accent color
Text color
Secondary color
However, the default theme should continue using the same warm canvas aesthetic.

Example:

Abstract
Muted terracotta

Nature
Sage green

Portraits
Warm sepia

Spiritual
Muted indigo

Contemporary
Charcoal

Use sophisticated muted colors.

Avoid extremely bright/saturated colors.

Category themes should influence:

Hero
Accent lines
Section decorations
Buttons
Story section
Typography details
Navigation accents
The artwork must always remain more visually important than the theme.

19. CATEGORY MANAGEMENT
Admin must be able to create unlimited categories.

Each category contains:

{
  id,
  name,
  slug,
  shortDescription,
  story,
  coverImage,
  theme,
  displayOrder,
  active
}

Admin functions:

Create
Edit
Delete
Reorder
Enable
Disable
Change cover
Change theme
Edit story
Before deleting a category containing paintings, show a confirmation/warning.

Prefer preventing accidental deletion.

20. CATEGORY STORY
Every category has its own story.

The category detail page should visually present:

Category Cover

Category Name

Short Introduction

Artist's Story

Painting Collection

The story should feel like an exhibition introduction.

Use elegant editorial typography and generous whitespace.

Avoid displaying the story inside a generic bordered card.

21. PAINTING DATA MODEL
Each painting should support:

{
  id,
  title,
  slug,
  categoryId,
  imageFileId,
  thumbnailUrl,
  previewUrl,
  highResolutionUrl,
  description,
  story,
  year,
  medium,
  dimensions,
  featured,
  published,
  displayOrder,
  createdAt,
  updatedAt
}

Drive-specific information should be abstracted from the public UI.

22. PAINTING MANAGEMENT
Admin can:

Add painting
Edit painting
Delete painting
Replace image
Change category
Change order
Feature/unfeature
Publish/unpublish
Painting form:

Title
Category
Image
Description
Story/inspiration
Year
Medium
Dimensions
Featured
Published
Show a beautiful live image preview.

23. HOME PAGE
Create a premium art-gallery home page.

Hero
Feature one major painting.

Include:

Artist name
Artistic statement
Featured artwork
Explore Collection CTA
The hero should feel immersive and calm.

Categories
Display major categories using artwork-driven layouts.

Each category should have:

Cover artwork
Name
Short description
Theme color
Featured Paintings
Show selected paintings in an editorial/masonry layout.

Artist Story
Include:

Artist portrait
Biography
Artist statement
Artistic philosophy
Footer
Include:

Artist name
Navigation
Categories
About
Contact
Social links
Copyright
24. GALLERY LAYOUT
Use a responsive masonry/editorial gallery.

Do not force every painting into identical dimensions if that would crop the artwork.

Preserve original aspect ratios.

Painting card:

Image
Title
Category
Year
Optional metadata
Hover on desktop:

Very subtle zoom
Elegant title reveal
Touch devices:

No hover dependency
Clicking opens the artwork viewer/detail experience.

25. ARTWORK DETAIL PAGE
Create a dedicated artwork detail page.

Display:

Large artwork
Title
Category
Year
Medium
Dimensions
Description
Story/inspiration
Provide an obvious:

"View Full Artwork"

action to open the advanced zoom viewer.

Include:

Previous artwork
Next artwork
Back to category
Do not make users repeatedly return to the gallery.

26. ARTWORK VIEWER BEHAVIOR
Viewer should support:

Controls
Zoom +
Zoom -
Reset
Fullscreen
Close
Previous
Next
Mouse
Wheel zoom
Drag to pan
Double-click zoom
Touch
Pinch zoom
Pan
Double tap
Swipe navigation where appropriate
Keyboard
Support:

Escape → Close
Arrow Left → Previous
Arrow Right → Next
+ → Zoom in
- → Zoom out
0 → Reset
Make sure keyboard behavior does not conflict with form fields.

27. RESPONSIVENESS — HIGHEST PRIORITY
The application must be extremely responsive and device compatible.

Do not merely scale the desktop version down.

Design intentionally for:

Small phones
Large phones
Tablets
iPads
Android tablets
Laptops
Desktop monitors
4K screens
Ultrawide monitors
28. MOBILE REQUIREMENTS
On mobile:

No horizontal scrolling
Touch-friendly controls
Large readable typography
Correct image aspect ratios
Easy navigation
Fast loading
Comfortable spacing
Proper safe-area handling
Responsive lightbox
Pinch zoom
Swipe navigation
Mobile-friendly forms
Respect device safe areas, especially on modern phones.

29. TABLET REQUIREMENTS
Tablet layouts should not simply look like enlarged mobile layouts.

Use the available space to create an elegant gallery experience.

Support:

Portrait
Landscape
Touch
High-resolution screens
Split-screen scenarios where reasonably possible
30. DESKTOP REQUIREMENTS
Desktop should provide:

Large artwork
Generous whitespace
Elegant typography
Sophisticated gallery layouts
Comfortable navigation
Large image viewer
Mouse interactions
Use sensible maximum content widths.

31. ULTRAWIDE DISPLAY
Do not stretch content endlessly on very wide monitors.

Use:

Maximum content width
Centered editorial layout
Large artwork areas
Controlled whitespace
The design should still feel intentional on 2560px, 3440px, and larger displays.

32. NAVIGATION
Desktop navigation:

Artist Name / Logo

Home
Collections
About
Contact

Admin

Mobile:

Artist Name

☰

Use an elegant mobile navigation drawer/full-screen menu.

Navigation must be touch-friendly.

33. ADMIN LOGIN
Create a dedicated Admin Sign In page.

Fields:

Username
Password
Demo credentials:

Username: Admin
Password: a.d.m.i.n,@n/e/w

After successful authentication:

Admin Login
     ↓
Admin Dashboard

Protect all admin routes.

Visitors should not need authentication.

Important:

These credentials are demo/development credentials only.

For production:

Never hard-code credentials in frontend source
Use secure authentication
Hash passwords
Use secure sessions/tokens
Implement proper authorization
34. ADMIN DASHBOARD
Create:

Dashboard
Categories
Paintings
Artist Profile
Appearance
Google Drive
Settings
Logout

Dashboard statistics:

Total paintings
Total categories
Published paintings
Featured paintings
Draft paintings
Provide quick actions:

Add Painting
Add Category
Edit Artist Profile
Appearance Settings
35. ADMIN CATEGORY UI
Provide a professional management table/grid.

Columns may include:

Category
Number of paintings
Status
Theme
Display order
Actions
Actions:

Edit
Preview
Reorder
Activate/Deactivate
Delete
36. ADMIN PAINTING UI
Provide:

Search
Category filter
Published filter
Featured filter
Sort/reorder
Painting listing should display thumbnails.

Actions:

Edit
Preview
Replace image
Publish/unpublish
Feature/unfeature
Delete
37. APPEARANCE SETTINGS
Admin can configure:

Global background
Canvas texture intensity
Global accent color
Typography
Artist logo/name
Hero artwork
Footer content
Category theme settings override the default category theme.

Where practical, provide a live preview.

38. ARTIST PROFILE MANAGEMENT
Admin can edit:

Artist name
Profile photo
Biography
Artist statement
Artistic philosophy
Contact information
Social media links
Artist profile should automatically update on the public website.

39. GOOGLE DRIVE ADMIN SETTINGS
Provide an Admin section for Google Drive integration.

Show:

Connection status
Connected account/status
Root gallery folder
Storage organization
Upload status
Recent uploads
Integration errors
Do not display private credentials.

Provide a clear:

Connected / Not Connected

status.

If the Drive connection fails, show a useful error rather than silently failing.

40. ERROR HANDLING
Implement graceful error states for:

Failed image upload
Google Drive unavailable
Image not found
Network failure
Authentication failure
Invalid form
Unauthorized admin access
Deleted artwork
Missing category
Failed image loading
Messages should be human-friendly.

Example:

Instead of:

HTTP 500

use:

We couldn't load this artwork right now.
Please try again in a moment.

41. LOADING STATES
Use elegant loading states.

For artwork:

Skeleton image
Progressive loading
Spinner only when appropriate
For admin:

Loading tables
Upload progress
Saving indicators
Avoid freezing the entire interface during uploads.

42. ACCESSIBILITY
Implement:

Semantic HTML
Keyboard navigation
Accessible labels
Proper focus management
Alt text
Good color contrast
Screen-reader-friendly controls
Accessible modal/lightbox
Focus trapping where appropriate
Zoom controls must have accessible names such as:

Zoom in
Zoom out
Reset zoom
Enter fullscreen
Close artwork viewer
Previous artwork
Next artwork

43. PERFORMANCE
Optimize for real-world devices and slower connections.

Implement:

Lazy loading
Code splitting
Route-level loading
Image optimization
Thumbnail loading
Caching
Efficient React rendering
Avoid unnecessary re-renders
Progressive image loading
Do not load every high-resolution painting when the home page opens.

Only load high-resolution images when needed.

44. SEO
Public pages should be SEO-friendly.

Implement:

Semantic HTML
Page titles
Meta descriptions
Open Graph metadata
Clean URLs/slugs
Artwork-specific metadata
Category-specific metadata
Descriptive image alt text
Example URL structure:

/
 /collections
 /collections/abstract
 /collections/nature
 /artwork/the-silent-morning
 /about
 /contact

Admin routes should not be indexed.

45. DATA ARCHITECTURE
Keep data separate from UI.

Example:

Category {
  id
  name
  slug
  shortDescription
  story
  coverImage
  theme
  displayOrder
  active
}

Painting {
  id
  title
  slug
  categoryId
  imageFileId
  thumbnailUrl
  previewUrl
  highResolutionUrl
  description
  story
  year
  medium
  dimensions
  featured
  published
  displayOrder
}

46. BACKEND/API ARCHITECTURE
If a backend is used, provide clean endpoints conceptually similar to:

POST   /api/auth/login
POST   /api/auth/logout
GET    /api/categories
POST   /api/categories
PUT    /api/categories/:id
DELETE /api/categories/:id

GET    /api/paintings
POST   /api/paintings
PUT    /api/paintings/:id
DELETE /api/paintings/:id

POST   /api/drive/upload
DELETE /api/drive/files/:id

GET    /api/artist
PUT    /api/artist

GET    /api/settings
PUT    /api/settings

Use authentication middleware for Admin endpoints.

Public endpoints should expose only published content.

47. DATABASE
Use a persistent database rather than relying on browser localStorage for production data.

Recommended conceptual entities:

Users
Categories
Paintings
ArtistProfile
SiteSettings
DriveFiles

Relationships:

Category
   ↓
Many Paintings

Painting
   ↓
Google Drive File

Store the Google Drive file ID and necessary metadata in the database.

Do not store the actual image binary in the database.

48. SECURITY
Implement:

Secure authentication
Password hashing
Session/token security
Authorization middleware
Input validation
File validation
File size limits
MIME type validation
CSRF protection where applicable
Rate limiting on authentication
Secure environment variables
Never trust client-side validation alone.

Never expose Google Drive secrets to the browser.

49. DESIGN SYSTEM
Create reusable design tokens.

Example:

--canvas: #F5F0E6;
--ink: #25231F;
--muted-ink: #6F6A61;
--border: #DCD4C7;
--accent: #8B6F47;

Use CSS variables/theme tokens so category themes can dynamically override values.

50. COMPONENT ARCHITECTURE
Create reusable components such as:

Layout
Header
Footer
MobileNavigation
CanvasBackground

HeroSection
CategoryCard
CategoryGrid
CategoryStory
PaintingCard
PaintingGrid
PaintingMetadata

ArtworkViewer
ZoomControls
FullscreenViewer
ArtworkNavigation

AdminLayout
AdminSidebar
AdminHeader
DashboardStats

CategoryForm
CategoryTable

PaintingForm
PaintingTable
ImageUploader
UploadProgress

ArtistProfileForm
AppearanceSettings
DriveSettings

Keep components focused and reusable.

51. ARTWORK VIEWER COMPONENT
The artwork viewer should be a reusable component.

Conceptually:

<ArtworkViewer
  artwork={selectedArtwork}
  artworks={gallery}
  isOpen={isOpen}
  onClose={closeViewer}
/>

It should handle:

Zoom
Pan
Touch
Fullscreen
Navigation
Keyboard controls
Loading
Error states
Do not implement the zoom behavior in a fragile custom way if a mature, accessible image-viewer library can provide a better experience.

52. RESPONSIVE ARTWORK VIEWER
Viewer behavior:

Phone
Full-screen artwork
Pinch zoom
Pan
Double tap
Swipe
Close

Tablet
Large artwork
Touch zoom
Pan
Fullscreen
Navigation

Desktop
Large artwork
Mouse wheel zoom
Drag
Keyboard
Fullscreen
Zoom controls

All modes should feel like the same product.

53. USER EXPERIENCE PRINCIPLE
The complete experience should feel like:

"Walking through a beautifully curated physical art exhibition."

The user should discover paintings naturally.

The interface should encourage:

Exploration
Curiosity
Storytelling
Artwork appreciation
Do not make the website feel like a database.

54. IMPORTANT VISUAL PRINCIPLE
The paintings are the hero.

UI must support the artwork rather than compete with it.

Avoid unnecessary:

Borders
Shadows
Badges
Decorative icons
Excessive buttons
Heavy cards
Loud animations
Use whitespace, typography, image scale, and subtle color to create elegance.

55. RESPONSIVE QUALITY CHECK
Before declaring the project complete, test at minimum:

320px
375px
390px
414px
768px
820px
1024px
1280px
1440px
1920px
2560px
3440px

Verify:

No horizontal overflow
No broken layouts
No clipped text
No distorted paintings
No inaccessible controls
No unusable modals
No zoom problems
No touch conflicts
No navigation problems
Test both portrait and landscape orientations.

56. ADMIN QUALITY CHECK
Verify:

Admin can log in
Public users don't need login
Protected admin routes work
Categories can be created
Category stories can be edited
Themes can be changed
Paintings can be uploaded
Images are stored in Google Drive
Drive file IDs are persisted
Paintings can be edited
Paintings can be deleted
Paintings can be published/unpublished
Featured artwork works
Artist profile can be edited
Appearance settings work
57. GOOGLE DRIVE QUALITY CHECK
Verify:

Image upload reaches Google Drive
Correct Drive folder is used
Drive file ID is saved
Public display works without Google login
High-resolution image retrieval works
Thumbnail/preview strategy works
Failed uploads are handled
Replacing an image does not leave uncontrolled orphan files
Deleted artwork is handled correctly
Google credentials never appear in frontend code
58. FINAL UI QUALITY
The final application should look like a premium international artist portfolio / digital museum collection.

It should be:

Artistic
Authentic
Warm
Elegant
Minimal
Responsive
Fast
Accessible
Easy to manage
Easy to browse
Beautiful on mobile
Beautiful on desktop
The final result should NOT look like:

A generic React template
A SaaS dashboard
A basic photo gallery
A WordPress-style portfolio
An e-commerce store
It should look like a carefully curated digital art exhibition.

59. FINAL DEVELOPMENT INSTRUCTION
Build the application in a way that separates:

Public Gallery
        ↓
React UI
        ↓
Application API
        ↓
Database
        ↓
Google Drive Storage

Keep authentication, database, and Google Drive credentials on the secure server side.

Keep the React frontend responsible for presentation and user interaction.

Use clean abstractions so storage can be changed in the future without rebuilding the gallery.

The application should be production-oriented, but the supplied Admin credentials may be used as the initial demo configuration.

Above all:

Prioritize artwork presentation, storytelling, effortless zooming, responsive device behavior, and an authentic canvas-inspired visual identity.