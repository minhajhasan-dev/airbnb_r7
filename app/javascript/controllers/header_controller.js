import { Controller } from "@hotwired/stimulus";
import { toggle } from "el-transition";

export default class extends Controller {
  static targets = [
    "openUserMenu",
    "dropdown",
    "mobileMenu",
    "openIcon",
    "closeIcon",
  ];

  toggleDropdown() {
    toggle(this.dropdownTarget);
  }

  toggleMobileMenu() {
    toggle(this.mobileMenuTarget);

    this.openIconTarget.classList.toggle("hidden");
    this.openIconTarget.classList.toggle("block");

    this.closeIconTarget.classList.toggle("hidden");
    this.closeIconTarget.classList.toggle("block");
  }
}
