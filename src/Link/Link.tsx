// import React, { ComponentProps } from 'react';
// import { useRouter } from 'next/router';
// import NextLink from 'next/link'
// import cn from 'classnames';

// import { setQueryString } from 'utils/url';

// // ----------------------------------------------------------------------
// // https://gist.github.com/flybayer/f9ca161efd3abcb1d8cb76c92e05f5d2
// // Smart wrapper around Next.js <Link>
// //
// // This is to improve the default handling of Next.js dynamic links which
// // requires both `href` and `as` props.
// // This improvement enables the following usage:
// //
// // <Link page="users/[id]" params={{ id: user.id }}>{user.name}</Link>
// //
// // <Link page="blog/[...slug]" params={{ slug: ['coffee', 'frenchpress'] }}>View Here</Link>
// // ----------------------------------------------------------------------

// export type LinkProps = {
//   // TODO require `page` OR `href`
//   href?: string;
//   as?: string;
//   page?: string;

//   children: JSX.Element;
//   className?: string;
//   activeClassName?: string;
//   partiallyActive?: boolean;

//   params?: Record<string, number | number[] | string | string[]>;

//   linkProps?: Omit<ComponentProps<typeof NextLink>, 'href' | 'as'>;
// } & ComponentProps<'a'>;

// const Link = ({
//   href,
//   as,
//   page,
//   children,
//   className,
//   activeClassName,
//   partiallyActive = false,
//   params,
//   linkProps = {},
//   ...props
// }: LinkProps) => {
//   const { pathname, query } = useRouter();

//   // If user suppiled href & as, then use those. Otherwise fallback to smart `page` logic
//   let finalHref = href || page;
//   let finalAs = as || page;

//   if (page && params) {
//     // We treat the `page` prop as a template for generating the `as` prop
//     for (const [key, value] of Object.entries(params)) {
//       if (
//         finalAs.includes(`[${key}]`) &&
//         (typeof value === 'string' || typeof value === 'number')
//       ) {
//         finalAs = finalAs.replace(`[${key}]`, value.toString());
//       } else if (finalAs.includes(`[[...${key}]]`)) {
//         const normalizedValue = Array.isArray(value)
//           ? value.join('/')
//           : value.toString();
//         finalAs = finalAs.replace(`[[...${key}]]`, normalizedValue);
//       } else if (finalAs.includes(`[...${key}]`)) {
//         const normalizedValue = Array.isArray(value)
//           ? value.join('/')
//           : value.toString();
//         finalAs = finalAs.replace(`[...${key}]`, normalizedValue);
//       }
//     }
//   }

//   const destPath = finalAs || finalHref;
//   const isActive = partiallyActive
//     ? pathname.startsWith(destPath)
//     : pathname === destPath;

//   if(typeof window !== 'undefined') {
//     finalHref += window.location.search;
//     finalAs += window.location.search;
//   }

//   return (
//     <NextLink {...linkProps} href={finalHref} as={finalAs} {...props}>
//       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- next auto adds href */}
//       <a className={cn([className, isActive && activeClassName])}>
//         {children}
//       </a>
//     </NextLink>
//   );
// };

// export default Link;
