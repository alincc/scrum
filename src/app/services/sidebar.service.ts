import { Injectable } from '@angular/core';


@Injectable()
export class SidebarService {

  constructor() { }

  toggle() {
      jQuery('.ui.labeled.icon.sidebar').sidebar('toggle');
  }

}
