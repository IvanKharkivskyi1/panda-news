// 'use client';

// import {
//   AbsoluteCenter,
//   Menu as ChakraMenu,
//   Portal,
//   type MenuTriggerItemProps,
// } from '@chakra-ui/react';
// import * as React from 'react';
// import { LuCheck, LuChevronRight } from 'react-icons/lu';

// interface MenuContentProps extends ChakraMenu.ContentProps {
//   portalled?: boolean;
//   portalRef?: React.RefObject<HTMLElement>;
// }

// export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
//   function MenuContent(props, ref) {
//     const { portalled = true, portalRef, ...rest } = props;
//     return (
//       <Portal disabled={!portalled} container={portalRef}>
//         <ChakraMenu.Positioner>
//           <ChakraMenu.Content ref={ref} {...rest} />
//         </ChakraMenu.Positioner>
//       </Portal>
//     );
//   }
// );

// export const MenuArrow = React.forwardRef<
//   HTMLDivElement,
//   ChakraMenu.ArrowProps
// >(function MenuArrow(props, ref) {
//   return <ChakraMenu.Arrow ref={ref} {...props} />;
// });

// export const MenuCheckboxItem = React.forwardRef<
//   HTMLDivElement,
//   ChakraMenu.CheckboxItemProps
// >(function MenuCheckboxItem(props, ref) {
//   const { children, ...rest } = props;

//   return (
//     <ChakraMenu.CheckboxItem ref={ref} {...rest}>
//       <ChakraMenu.ItemIndicator>
//         <LuCheck />
//       </ChakraMenu.ItemIndicator>
//       <ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>
//     </ChakraMenu.CheckboxItem>
//   );
// });

// export const MenuRadioItem = React.forwardRef<
//   HTMLDivElement,
//   ChakraMenu.RadioItemProps
// >(function MenuRadioItem(props, ref) {
//   const { children, ...rest } = props;

//   return (
//     <ChakraMenu.RadioItem ref={ref} {...rest}>
//       <AbsoluteCenter axis="horizontal" left="4">
//         <ChakraMenu.ItemIndicator>
//           <LuCheck />
//         </ChakraMenu.ItemIndicator>
//       </AbsoluteCenter>
//       {children && <ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>}
//     </ChakraMenu.RadioItem>
//   );
// });

// export const MenuItemGroup = React.forwardRef<
//   HTMLDivElement,
//   ChakraMenu.ItemGroupProps
// >(function MenuItemGroup(props, ref) {
//   const { title, children, ...rest } = props;

//   return (
//     <ChakraMenu.ItemGroup ref={ref} {...rest}>
//       {title && <ChakraMenu.ItemGroupLabel>{title}</ChakraMenu.ItemGroupLabel>}
//       {children}
//     </ChakraMenu.ItemGroup>
//   );
// });

// export const MenuTriggerItem = React.forwardRef<
//   HTMLDivElement,
//   MenuTriggerItemProps
// >(function MenuTriggerItem(props, ref) {
//   const { startIcon, children, ...rest } = props;

//   return (
//     <ChakraMenu.TriggerItem ref={ref} {...rest}>
//       {startIcon}
//       <ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>
//       <LuChevronRight />
//     </ChakraMenu.TriggerItem>
//   );
// });

// export const MenuRadioItemGroup = ChakraMenu.RadioItemGroup;
// export const MenuContextTrigger = ChakraMenu.ContextTrigger;
// export const MenuRoot = ChakraMenu.Root;
// export const MenuSeparator = ChakraMenu.Separator;

// export const MenuItem = ChakraMenu.Item;
// export const MenuItemText = ChakraMenu.ItemText;
// export const MenuItemCommand = ChakraMenu.ItemCommand;
// export const MenuTrigger = ChakraMenu.Trigger;
