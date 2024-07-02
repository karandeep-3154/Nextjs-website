1) Server side rendering is a technique used in web development where the server generates the HTML content of a web page before it's sent to the user's browser. This is in contrast to Client Side Rendering (CSR), where the browser generates the HTML content after receiving the raw data from the server.

2) Nextjs Supports Server side rendering

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
