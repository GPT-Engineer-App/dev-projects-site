import { Box, Flex, Link, IconButton, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FacebookIcon = () => <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91V120c0-25.35 12.07-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-67.21 0-112.36 39.66-112.36 112.1v62.22H71.69v92.66h41.31v224.34h100.2V288z"></path></svg>;
const TwitterIcon = () => <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.894 1.422 25.34 1.422 49.055 0 94.213-16.6 130.274-44.832-46.132-1.422-84.792-31.188-98.112-72.772 6.498.974 12.995 1.422 19.493 1.422 9.421 0 18.843-1.271 27.614-3.613-48.081-9.747-84.265-51.98-84.265-102.985v-1.422c14.08 7.83 30.149 12.848 47.431 13.417-27.897-18.843-46.132-51.005-46.132-87.391 0-19.493 5.197-37.36 14.294-52.954 49.652 61.01 123.963 100.926 207.623 105.258-1.897-7.83-2.924-15.661-2.924-23.715 0-57.828 46.885-104.713 104.713-104.713 30.149 0 57.261 12.787 76.212 33.209 23.715-4.548 46.132-13.417 66.599-25.34-7.83 24.743-24.366 45.422-45.897 58.543 21.117-2.396 41.584-8.194 60.535-16.6-14.08 20.791-31.793 39.308-52.36 54.031z"></path></svg>;
const InstagramIcon = () => <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm85.9-189.6c0 14.9-12 27-26.9 27s-26.9-12.1-26.9-27c0-14.9 12-27 26.9-27s26.9 12.1 26.9 27zm76.4 22.3c-7.5-7.5-17.9-11.7-28.3-11.7-10.5 0-20.9 4.3-28.3 11.7-7.5 7.5-11.7 17.9-11.7 28.3 0 67.2 54.5 122.3 121.9 122.3 10.5 0 20.9-4.2 28.3-11.7 7.5-7.5 11.7-17.9 11.7-28.3 0-67.2-54.6-122.3-122.2-122.3-10.4 0-20.8 4.2-28.3 11.7zM224.1 338c-45.2 0-81.9-36.7-81.9-81.9s36.7-81.9 81.9-81.9 81.9 36.7 81.9 81.9-36.7 81.9-81.9 81.9zm146.4-165.4c0 25.9-21.1 47-47 47s-47-21.1-47-47c0-25.9 21.1-47 47-47s47 21.1 47 47z"></path></svg>;
const ArrowUpIcon = () => <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 241.4l154.3-154.3V456c0 13.3 10.7 24 24 24s24-10.7 24-24V87.1l154.3 154.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-192-192c-9.4-9.4-24.6-9.4-33.9 0l-192 192c-9.4 9.4-9.4 24.6 0 33.9s24.5 9.4 33.9 0z"></path></svg>;

const Footer = () => {
  return (
    <Flex as="footer" bg="blue.500" color="white" p={3} align="center" justify="space-between">
      <Text fontSize="sm">© 2023 My Portfolio</Text>
      <Flex>
        <Link href="https://facebook.com" isExternal><IconButton aria-label="Facebook" icon={<FacebookIcon />} /></Link>
        <Link href="https://twitter.com" isExternal><IconButton aria-label="Twitter" icon={<TwitterIcon />} /></Link>
        <Link href="https://instagram.com" isExternal><IconButton aria-label="Instagram" icon={<InstagramIcon />} /></Link>
      </Flex>
      <IconButton aria-label="Back to top" icon={<ArrowUpIcon />} onClick={() => window.scrollTo(0, 0)} />
    </Flex>
  );
};

export default Footer;