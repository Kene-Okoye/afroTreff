// `components` object you'll pass to PortableText w/ optional TS definition
import { PortableTextComponents } from '@portabletext/react';

export const componentsPrivacy: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="portableTextPrivacy-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="portableTextPrivacy-h2">{children}</h2>,
    normal: ({ children }) => <p className="portableTextPrivacy-paragraph">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="portableTextPrivacy-blockquote">{children}</blockquote>
    ),
    strong: ({ children }) => <strong className="portableTextPrivacy-strong">{children}</strong>,
  },

  marks: {
    // Render a custom `link` annotation
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={(target === '_blank' && 'noopener noreferrer nofollow') || undefined}
          className="portableTextPrivacy-link"
        >
          {children}
        </a>
      );
    },
  },
};
