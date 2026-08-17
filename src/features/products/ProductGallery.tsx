'use client';

interface ProductGalleryProps {
  initialImage: string;
}

export default function ProductGallery({ initialImage }: ProductGalleryProps) {
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
          alt="Main product detail 1080x1080" 
          width={1080}
          height={1080}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}
