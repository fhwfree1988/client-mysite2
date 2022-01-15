import internal from "stream";

export default interface MenuType{
    groupId: number,
    groupName : string,
    menuitem : MenuItem
}
/*export default interface MenuItemType{
    menuId: number,
    menuTitle : string
}*/
export default interface MenuItemType{
    menuitem : MenuItem
}
type MenuItem = {
    menuId: number,
    menuTitle : string
}