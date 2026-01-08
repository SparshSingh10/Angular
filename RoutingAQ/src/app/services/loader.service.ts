import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
// Loader is OFF initially
  loading$ = this.loadingSubject.asObservable();

  show() {
    console.log('LOADER: show');
    this.loadingSubject.next(true);
    // Loader state becomes true
    // Service broadcasts this value
  }
//   User clicks Login button
// In LoginComponent → loginSubmit()
// this.loaderService.show();
// What this does:
// Calls show() in LoaderService

  hide() {
    console.log('LOADER: hide');
    this.loadingSubject.next(false);
  }
}



// 🔁 PART 4 – Loader FLOW (Very Simple)
// 🎯 Big idea (1 line)

// LoaderService controls the loader state, LoaderComponent listens to it, and LoginComponent triggers it.

// That’s the whole flow.

// Now step by step 👇

// 🧩 1️⃣ App startup (initial state)
// In LoaderService
// private loadingSubject = new BehaviorSubject<boolean>(false);


// Meaning:

// Loader is OFF initially

// In LoaderComponent
// this.loaderService.loading$.subscribe(...)


// Meaning:

// LoaderComponent is listening

// It will react whenever loading becomes true or false

// UI:
// ❌ No loader visible

// 🧩 2️⃣ User clicks Login button
// In LoginComponent → loginSubmit()
// this.loaderService.show();


// What this does:

// Calls show() in LoaderService

// 🧩 3️⃣ LoaderService broadcasts “SHOW”
// In LoaderService
// show() {
//   this.loadingSubject.next(true);
// }


// Meaning:

// Loader state becomes true

// Service broadcasts this value

// Console:

// LOADER: show

// 🧩 4️⃣ LoaderComponent receives update
// In LoaderComponent
// this.loaderService.loading$.subscribe(loading => {
//   this.isLoading = loading;
// });


// Now:

// loading === true

// isLoading = true

// UI:
// ✅ Loader becomes visible

// Console:

// LOADER COMPONENT: loading = true

// 🧩 5️⃣ API call runs
// In LoginComponent
// this.userService.getUsers().subscribe(...)


// While API is running:

// Loader stays visible

// App looks responsive

// 🧩 6️⃣ API response arrives (success or error)

// After logic completes:

// this.loaderService.hide();

// 🧩 7️⃣ LoaderService broadcasts “HIDE”
// In LoaderService
// hide() {
//   this.loadingSubject.next(false);
// }


// Meaning:

// Loader state becomes false

// Console:

// LOADER: hide

// 🧩 8️⃣ LoaderComponent hides loader
// In LoaderComponent
// isLoading = false;


// UI:
// ❌ Loader disappears

// Console:

// LOADER COMPONENT: loading = false