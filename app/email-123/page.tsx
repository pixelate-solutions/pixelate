// app/signature/page.tsx
export const metadata = {
  title: 'Email Signature',
};

export default function SignaturePage() {
  return (
    <main className="p-8 bg-transparent min-h-screen">
      {/* Your closing */}
      <strong style={{ fontSize: 16, fontFamily: 'Arial, sans-serif' }}>
        Best Regards,
      </strong>

      <table
        cellPadding={0}
        cellSpacing={0}
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          lineHeight: 1.4,
          marginTop: 12,
        }}
      >
        <tbody>
          <tr>
            {/* Logo cell */}
            <td style={{ paddingRight: 12 }} valign="middle">
              <img
                src="https://www.pixelate.solutions/logo.png"
                alt="Pixelate Solutions"
                width={80}
                height={80}
                style={{ display: 'block', border: 'none', outline: 'none' }}
              />
            </td>

            {/* Info cell */}
            <td valign="middle">
              {/* Name: force bold + 16px */}
              <p style={{ margin: 0, lineHeight: 1.2 }}>
                <strong style={{ fontSize: 16, fontFamily: 'Arial, sans-serif' }}>
                  Joey Morrison
                </strong>
              </p>

              {/* Title & Company: use <span> to force size/color */}
              <p style={{ margin: '2px 0 6px 0', lineHeight: 1.2 }}>
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: 'Arial, sans-serif',
                    color: '#555',
                  }}
                >
                  Software Engineer
                  <br />
                  Pixelate Solutions
                </span>
              </p>

              {/* Contact info */}
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4 }}>
                📧{' '}
                <a
                  href="mailto:admin@pixelate.solutions"
                  style={{ color: '#1a0dab', textDecoration: 'none' }}
                >
                  admin@pixelate.solutions
                </a>
                <br />
                🌐{' '}
                <a
                  href="https://www.pixelate.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1a0dab', textDecoration: 'none' }}
                >
                  pixelate.solutions
                </a>
                <br />
                📞 +1 (616) 320‑1776
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
