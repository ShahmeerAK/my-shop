// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBgdtxSyL1mbHiaMN6GRTSTMYv5HfBFx6I",
  authDomain: "my-book-4cd56.firebaseapp.com",
  projectId: "my-book-4cd56",
  storageBucket: "my-book-4cd56.appspot.com",
  messagingSenderId: "224845555955",
  appId: "1:224845555955:web:4e683ea86baaf273186f86"
};
export declare interface Persistence {
    /**
     * Type of Persistence.
     * - 'SESSION' is used for temporary persistence such as `sessionStorage`.
     * - 'LOCAL' is used for long term persistence such as `localStorage` or `IndexedDB`.
     * - 'NONE' is used for in-memory, or no persistence.
     */
    readonly type: 'SESSION' | 'LOCAL' | 'NONE';
}

// Initialize Firebase