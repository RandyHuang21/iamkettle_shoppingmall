'use client';
import Image from "next/image";


export default function ProductCard({ title, description, buttonText, disabled, imageSrc }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '250px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        opacity: disabled ? 0.6 : 1,
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
      >
        {imageSrc && (
          <div style={{ marginBottom: '15px' }}>
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
          </div>
        )}
        <h3>{title}</h3>
        <p style={{ fontSize: '0.9em', color: '#666' }}>{description}</p>
        <button
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            background: disabled ? '#a1c4fd' : '#f093fb',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: disabled ? 'not-allowed' : 'pointer'
          }}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
