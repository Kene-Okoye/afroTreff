// `components` object you'll pass to PortableText w/ optional TS definition
import { PortableTextComponents } from '@portabletext/react';

export const components: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className="portableText-paragraph">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="portableText-blockquote">{children}</blockquote>
    ),
    strong: ({ children }) => <strong className="portableText-strong">{children}</strong>,
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
          className="portableText-link"
        >
          {children}
        </a>
      );
    },
  },
};
