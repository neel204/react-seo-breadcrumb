# React SEO Breadcrumb

**React SEO Breadcrumb** is a customizable breadcrumb component that integrates schema markup for SEO optimization. It allows you to build breadcrumbs for your website with enhanced SEO support, ensuring better search engine indexing and user experience.

---

## Features

- **SEO-friendly** with schema.org markup for improved search engine indexing.
- **Customizable styles** via Tailwind CSS.
- **Flexible configuration** for breadcrumb items, separators, and icons.
- **Truncation support** for long titles with ellipsis.
- **Home breadcrumb toggle**: Optionally disable the Home breadcrumb.

---

## Installation

To install the package, run:

```bash
npm install react-seo-breadcrumb
```

## Tailwind CSS Setup

To use react-seo-breadcrumb, make sure your project has Tailwind CSS configured. If not, follow these steps:

1. Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Initialize Tailwind CSS configuration:

```bash
npx tailwindcss init
```

3. Create a `tailwind.config.js` file (if it’s not automatically generated), and configure your `content` property to include your React component files:

```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Create a `postcss.config.js` file in your project root if you don't have one already, and include the following:

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

5. Create a `src/tailwind.css` file with the following content to import the Tailwind CSS base styles:

```bash
/* src/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import this `tailwind.css` file into your main `index.js` or `App.js` file:

```bash
import './tailwind.css';
```

## **Usage**

1. **Create a `breadcrumbItems` array:** This array will contain the objects representing each breadcrumb item.

   Example `breadcrumbItems` array:

```bash
const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Videos", link: "/videos" },
    { title: "Video Title", link: "/video-id" }
];
```

2. **Use the Breadcrumb component in your React component:**

```bash
import Breadcrumb from 'react-seo-breadcrumb';

const App = () => {
    const breadcrumbItems = [
        { title: "Home", link: "/" },
        { title: "Videos", link: "/videos" },
        { title: "Video Title", link: "/video-id" }
    ];

    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
        </div>
    );
};

export default App;
```

## **Props**

The `Breadcrumb` component accepts the following props:

| **Prop**              | **Type**  | **Default value** | Description                                                          |
| --------------------- | --------- | ----------------- | -------------------------------------------------------------------- |
| `item`                | `Array`   | Required          | Array of breadcrumb items (title, link, and optional colorDisable).  |
| `disableHome`         | `Boolean` | `false`           | if `true`, hides the "Home" breadcrumb.                              |
| `changeDefaultColor`  | `String`  | `"text-blue-700"` | Default color for breadcrmb items.                                   |
| `changeActivityColor` | `String`  | `"text-gray-700"` | Color for the breadcrumb separators.                                 |
| `changeDefaultIcon`   | `String`  | `">"`             | Separator icon between breadcrumb items.                             |
| `needSchema`          | `Boolean` | `true`            | If `true`, adds schema.org makup to breadcrumbs.                     |
| `schemaItemProp`      | `String`  | `"ListItem"`      | Schema markup item property (e.g., `ListItem`).                      |
| `schemaItemType`      | `String`  | `"Thing"`         | Schema markup item type (e.g., `Thing`).                             |
| `needEllipsisIfLong`  | `Boolean` | `true`            | If `true`, truncates breadcrumb titles longer than `ellipsisLength`. |
| `ellipsisLength`      | `Number`  | `25`              | Maximum length for breadcrumb title before truncation.               |
| `fontBold`            | `Boolean` | `false`           | If `true`, pplies bold styling to breadcrub items.                   |
| `activeItemBold`      | `Boolean` | `false`           | If `true`, the active breadcrumb item will be bolded.                |

## **Example**

**Basic Example**

```bash
import Breadcrumb from 'react-seo-breadcrumb';

const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Videos", link: "/videos" },
    { title: "Video Title", link: "/video-id" }
];

const App = () => (
    <div>
        <Breadcrumb items={breadcrumbItems} />
    </div>
);
```

## **Example with Customization**

```bash
import Breadcrumb from 'react-seo-breadcrumb';

const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Videos", link: "/videos" },
    { title: "Video Title", link: "/video-id" }
];

const App = () => (
    <div>
        <Breadcrumb
            items={breadcrumbItems}
            disableHome={false}
            changeDefaultColor="text-blue-700"
            changeActivityColor="text-gray-700"
            changeDefaultIcon=">"
            needEllipsisIfLong={true}
            ellipsisLength={30}
        />
    </div>
);
```

## **Disabling Ellipsis**

```bash
<Breadcrumb items={breadcrumbItems} needEllipsisIfLong={false} />
```

## **Using Schema Markup**

```bash
<Breadcrumb
    items={breadcrumbItems}
    needSchema={true}
    schemaItemProp="ListItem"
    schemaItemType="Thing"
/>
```

## **Custom Separator Icon**

```bash
<Breadcrumb items={breadcrumbItems} changeDefaultIcon="|" />
```

## **Hiding the Home Item**

```bash
<Breadcrumb items={breadcrumbItems} disableHome={true} />
```

## **SEO Benefits**

Breadcrumbs enhance user navigation and provide substantial SEO benefits. By implementing schema.org markup for breadcrumbs, search engines like Google can better understand your site's structure. This leads to better indexing, visibility in search results, and improved rankings.

- **Enhanced Website Organization:** Breadcrumbs help both users and search engines identify page relationships.

- **Improved Search Engine Visibility:** Search engines use breadcrumbs to understand content hierarchy.

- **Better User Experience:** Breadcrumbs improve navigation, particularly for larger websites.

## **License**

### The MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Support

If you encounter any problems, have questions, or want to request features, feel free to reach out via:

- GitHub Issues: [Report an Issue](https://github.com/neel204/react-seo-breadcrumb/issues)
- Email: [neel.chavda104@gmail.com](mailto:neel.chavda104@gmail.com)
- Contributions: Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

---

## Keywords

React, Breadcrumb, SEO Breadcrumb, React Component, Tailwind CSS Breadcrumb, Structured Data, Navigation, React SEO, SEO-friendly
