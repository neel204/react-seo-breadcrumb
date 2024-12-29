// import React from "react";
// import PropTypes from "prop-types";

// const Breadcrumb = ({
//   items,
//   disableHome = false,
//   changeDefaultColor = "text-blue-700",
//   changeActivityColor,
//   needEllipsisIfLong,
//   ellipsisLength = 25,
// }) => {
//   // Helper function to add ellipsis
//   function addEllipsisIfLong(title, maxLength) {
//     if (title.length > maxLength) {
//       return title.slice(0, maxLength) + "...";
//     }
//     return title;
//   }

//   return (
//     <ol className="breadcrumb-list gap-1 items-center text-base capitalize hidden md:flex">
//       {!disableHome && (
//         <li key="Home" className={`breadcrumb-list-item ${changeDefaultColor}`}>
//           <a href="/" title="Home">
//             Home
//           </a>
//         </li>
//       )}
//       {items.map((item, index) => (
//         <React.Fragment key={index}>
//           <span className="breadcrumb-separator text-gray-700 text-sm">›</span>
//           <li
//             className={`breadcrumb-list-item ${
//               item.colorDisable ? "text-gray-500" : changeDefaultColor
//             }`}
//           >
//             {item.link ? (
//               <a href={item.link} title={item.title}>
//                 {needEllipsisIfLong
//                   ? addEllipsisIfLong(item.title, ellipsisLength)
//                   : item.title}
//               </a>
//             ) : (
//               <span>{item.title}</span>
//             )}
//           </li>
//         </React.Fragment>
//       ))}
//     </ol>
//   );
// };

// // PropTypes for validation
// Breadcrumb.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       link: PropTypes.string,
//       colorDisable: PropTypes.bool,
//     })
//   ).isRequired,
//   disableHome: PropTypes.bool,
//   changeDefaultColor: PropTypes.string,
//   changeActivityColor: PropTypes.string,
//   needEllipsisIfLong: PropTypes.bool,
//   ellipsisLength: PropTypes.number,
// };

// export default Breadcrumb;


import React from "react";
import PropTypes from "prop-types";
import "./tailwind.css";

const Breadcrumb = ({
  items,
  disableHome = false,
  changeDefaultColor = "text-blue-700",
  changeActivityColor = "text-gray-700",
  changeDefaultIcon = "›",
  needSchema = true,
  schemaItemProp = "ListItem",
  schemaItemType = "Thing",
  needEllipsisIfLong = true,
  ellipsisLength = 25,
  fontBold = false,
  activeItemBold = false,
}) => {
  // Function to truncate long titles if needed
  const addEllipsisIfLong = (title, maxLength = ellipsisLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <ol className="breadcrumb-list gap-1 items-center text-base capitalize hidden md:flex">
      {/* Home item with optional schema markup */}
      {!disableHome && (
        <li
          key="Home"
          className={`breadcrumb-list-item text-sm ${changeDefaultColor}`}
          itemProp="itemListElement"
          itemScope
          itemType={`http://schema.org/${schemaItemType}`}
        >
          <a
            href="/"
            title="Home"
            itemProp="item"
            itemScope
            itemType={`http://schema.org/${schemaItemType}`}
          >
            Home
          </a>
        </li>
      )}

      {/* Separator between breadcrumb items */}
      {!disableHome && (
        <span className={`breadcrumb-separator ${changeActivityColor} text-sm`}>
          {changeDefaultIcon}
        </span>
      )}

      {/* Render breadcrumb items dynamically */}
      {items.map((item, index) =>
        item.title ? (
          <li
            key={item.title}
            className={`breadcrumb-list-item text-sm ${
              fontBold && !activeItemBold ? "font-bold" : ""
            } ${item.colorDisable ? "text-gray-500 " : changeDefaultColor}`}
            itemProp="itemListElement"
            itemScope
            itemType={`http://schema.org/${schemaItemType}`}
          >
            {item.link ? (
              <a
                href={item.link}
                title={item.title}
                itemProp="item"
                itemScope
                itemType={`http://schema.org/${schemaItemType}`}
              >
                {addEllipsisIfLong(item?.title)}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
            {/* Add separator between items */}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator ml-1 text-gray-700 text-sm">
                {changeDefaultIcon}
              </span>
            )}
          </li>
        ) : null
      )}
    </ol>
  );
};

// Define PropTypes for the component
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      colorDisable: PropTypes.bool,
    })
  ).isRequired,
  disableHome: PropTypes.bool,
  changeDefaultColor: PropTypes.string,
  changeActivityColor: PropTypes.string,
  changeDefaultIcon: PropTypes.string,
  needSchema: PropTypes.bool,
  schemaItemProp: PropTypes.string,
  schemaItemType: PropTypes.string,
  needEllipsisIfLong: PropTypes.bool,
  ellipsisLength: PropTypes.number,
  fontBold: PropTypes.bool,
  activeItemBold: PropTypes.bool,
};

// Define default values for props
Breadcrumb.defaultProps = {
  disableHome: false,
  changeDefaultColor: "text-blue-700",
  changeActivityColor: "text-gray-700",
  changeDefaultIcon: "›",
  needSchema: true,
  schemaItemProp: "ListItem",
  schemaItemType: "Thing",
  needEllipsisIfLong: true,
  ellipsisLength: 25,
  fontBold: false,
  activeItemBold: false,
};

export default Breadcrumb;
