import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  readonly isLoading = signal<boolean>(false);
}
