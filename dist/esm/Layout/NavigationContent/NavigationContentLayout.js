// import React, { FC } from "react";
// import { Flex, Box } from '@chakra-ui/core';
// import Navigation from 'components/Navigation';
// import Header from '../Header';
// import NavigationContentHeader from './NavigationContentHeader';
// import ContentBody from './ContentBody';
// import ContentPanel from './ContentPanel';
// interface NavigationContentLayoutProps {
//   children: JSX.Element[];
//   page: string;
// };
// const NavigationContentLayout: FC<NavigationContentLayoutProps> = ({ children, page }) => {
//   let content, panel
//   content = children
//   if(Array.isArray(children)) {
//     content = children.filter((child) => child.type === ContentBody)
//     panel = children.filter((child) => child.type === ContentPanel)
//   }
//   return (
//     <>
//       <Header page={page}/>
//       <Flex flexDirection="column" flex="1">
//         <Flex flex="1">
//           <Flex flex={{md: "0 0 80px"}}>
//             <Navigation/>
//           </Flex>
//           <Flex
//             p="24px"  
//             overflow="auto"
//             height={["calc(100vh - 80px)","calc(100vh - 80px)", "100vh"]}
//             direction="column"
//             flex="1"
//           >
//             <NavigationContentHeader page={page}/>
//             <Flex mt="24px" flexDirection={["column", "column", "row"]}>
//               <Flex flex="1">
//                 {content}
//               </Flex>
//               {panel && (
//                 <Flex direction="column" flex="0 0 270px">
//                   {panel}
//                 </Flex>
//               )}
//             </Flex>
//           </Flex>
//         </Flex>
//       </Flex>
//     </>
//   )
// };
// export default NavigationContentLayout;
"use strict";
//# sourceMappingURL=NavigationContentLayout.js.map