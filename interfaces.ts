export interface StoreState extends StoreAction {
  showMenu: boolean;
}

export interface StoreAction {
  setShowMenu: (showMenu: StoreState["showMenu"]) => void;
}

export interface RegisterForm {
  teamName: string;
  phone: string;
  email: string;
  projectTopic: string;
  category: string;
  groupSize: string;
  agree: boolean;
}


export interface ContactForm {
  firstName: string;
  email: string;
  message: string;
}
