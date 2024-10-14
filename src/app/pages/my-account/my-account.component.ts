import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountComponent implements OnInit {
users: any;
isSidebarVisible: boolean = false;

ngOnInit(): void {
  this.users = JSON.parse(localStorage.getItem('users') || '[]');
}



  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
