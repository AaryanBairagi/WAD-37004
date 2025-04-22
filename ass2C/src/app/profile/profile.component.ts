import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  name: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
    if (this.username) {
      this.auth.getUserData(this.username).subscribe((res) => {
        this.name = res.name;
      });
    }
  }
}
