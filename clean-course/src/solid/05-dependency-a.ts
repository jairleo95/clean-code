import { LocalDataBaseService, WebApiPostService } from './05-dependency-c';
import { PostService } from './05-dependency-b';


// Main
(async () => {

    //const provider = new LocalDataBaseService();
    const provider = new WebApiPostService();
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();