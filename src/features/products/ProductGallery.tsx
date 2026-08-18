'use client';

interface ProductGalleryProps {
  initialImage: string;
  alt?: string;
}

export default function ProductGallery({ initialImage, alt }: ProductGalleryProps) {
  return (
    <div className="detail-gallery">
      <div 
        className="detail-main-img" 
        style={{ 
          width: '100%', 
          aspectRatio: '1 / 1', 
          backgroundColor: '#f8fafc', 
          overflow: 'hidden', 
          borderRadius: 'var(--radius-md)', 
          position: 'relative' 
        }}
      >
        <img 
          src={initialImage} 
          alt={alt || "Product image"} 
          width={1080}
          height={1080}
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}
