
---

# **Netflix-GPT App**

**Netflix-GPT** is an AI-driven platform that enhances the Netflix experience. It leverages **OpenAI's GPT-3.5** model to provide **personalized content recommendations**. This project is designed for Netflix enthusiasts seeking a **more engaging and customized streaming experience**.


## **Features**

* **GPT-Search** — AI-powered content search and recommendations
* **Authentication** — Secure login and user management
* **Internationalisation** — Multi-language support
* **TMDB API Integration** — Fetch movies, TV shows, and metadata
* **Memoisation** — Optimized performance for repeated searches

## **SET-UP Project from my end**

1. Created React+Vite App (npm create vite@latest netmirror)
2. Configure Tailwind-CSS 
3. Configure React Router (npm i -D react-router-dom)
4. Header Component

5. SignIn/Up form Component
        - Form Validation(REGEX)
        - useRef Hook

6. Configure FIREBASE 
        - firebase login
        - firebase init
        - firebase deploy

7. Create User and SignIn User Account in firebase
        - createUserWithEmailAndPassword
        - signInWithEmailAndPassword

8. Storing User Details in REDUX Toolkit
        - npm install @reduxjs/toolkit react-redux
        - utils/appStore.js, userSlice.js 
        - (Slice -> Store -> Provider(App.jsx))
        - createUser to Store || signInUser to Store (onAuthStateChanged) 
        - Navigate to browse Page

9. Header
        - Netflix Logo
        - User Logo
        - Button : Sign Out (Navigate to SignIn Page) - signOut func from FireBase
        - Hide Sign Out in SignIn Page (Condition : User in Redux Store(useSelector))
        - After Sign Out - Unable to Access Browse Page
        - After Sign In - Unable to Access Browse Page
        - Unsubscribed onAuthStateChange callback

10. URL Constants (Saving URL)
        - Netflix Logo
        - AVATAR LOGO
        - API call (TMDB Movie - Now Playing)
        - IMG_CDN (Image URL)

11. Fetch Movies from TMDB Application
        - Apply for API Token & Key
        - Explore TMDB Documentation for API Calls
        - GET nowPlaying movies data in browser page

12. Browse Page
        - API Fetch(TMDB Movie - Now Playing)
        - MainContainer
                - Video Background
                        - Fetch Video from TMDB Movies videos - get youtubeVideoKey
                        - Copy Embed Code from Youtube to display Video
                        - Custom Hook(useTrailerVideo) - fetch Trailer Video
                        - adding "?autoplay=1&mute=1" - for autoplaying the video
                - VideoTitle

        - SecondaryContainer
                - MovieList * n 
                        - Popular
                        - Now Playing
                        - Trending
                        - Horror
                - cards * n 

13. Storing Movies inside MovieSlice (REDUX)
        - Created movieSlice and store in appStore
        - Storing movies from api json.results to MovieSlice
        - Storing movie trailer 

14. CUSTOM HOOKS
        - useNowPlayingMovies (Fetch Data from TMDB API and updating in store) - using in Browse Components
        - useTrailerVideo - Fetch Movie Trailer from API and Displaying
        - usePopularMovies - Fetch Popular Movie List (Many More Hooks to fetch movies as per title)

15. FOOTER
        - Added Contact Info
        - Added Social Media Link

## **Features for the Application**

- Login/SignUp
    - Sign In / Sign Up Form
    - redirect to Browse Page

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
        
- NetMirrorGPT
    - Search Bar
    - Movie Suggestions

---

