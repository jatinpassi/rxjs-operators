import { scan3$, subject$ } from "./transformation-operators/scan";
scan3$.subscribe(val => console.log(val));
subject$.next({ name: "jatin" });
subject$.next({ age: 26 });
subject$.next({ favoriteLanguage: "JavaScript" });
