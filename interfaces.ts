export interface StoreState extends StoreAction {
  showMenu: boolean;
}

export interface StoreAction {
  setShowMenu: (showMenu: StoreState["showMenu"]) => void;
}