1) Server side rendering is a technique used in web development where the server generates the HTML content of a web page before it's sent to the user's browser. This is in contrast to Client Side Rendering (CSR), where the browser generates the HTML content after receiving the raw data from the server.

2) Nextjs Supports Server side rendering also

3) () is used to omit Current folder in url path
Example: http://localhost:8080/setting
then if we have folders like (user) -> setting -> page.jsx file
We can omit writing user here

4) [] is used to create dynamic paths like (user) -> profile -> [userId] -> page.jsx file

5) Single []: Matches a single segment of the URL path and maps it to a parameter in the page component.
Nested [...]: Matches multiple segments of the URL path and captures them as an array, allowing for catch-all routes.
[[...]]: 

6) Layout.js by default without even implemtation displays page.js file of current folder

7) We can define custom Layout inside it and do parallel(multiple components on same page like leftbar and rightbar) and conditional routing

8) <Link href = '/colorbox'>Go to Colorbox Panel</Link>
   <Link href = {`/user/profile/${id}`}>Go to Admin Panel</Link>

9) Router -> used for navigation within code 
   Syntax - https://drive.google.com/file/d/1Wl3tGpYFUXX1nYObkWac85VLA932vTcI/view?usp=sharing

10) Server Components allow you to write UI that can be rendered and optionally cached on the server. By default all components are server side and cached on the server. If we want to make a server side component client side, we can use "use client" in a file at top, then all other modules imported into it, including child components, are considered part of the client bundle.

11) When to use Client Side Components and Server Side Components
Refer - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

12) all classess and ids css on golbals.css can be applied anywhere.

13) For Backend Implementation in NextJS, Refer - https://youtu.be/yN8VXmncvRU?si=VpSA5FNeBvIOumg-
