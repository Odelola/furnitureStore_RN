import sanityClient  from "@sanity/client"
import  imageUrlBuilder  from "@sanity/image-url"

const client = sanityClient({
    projectId: 'wvifwibk',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-07-28',
})

const builder = imageUrlBuilder(client);
export const urlForImage = (source) =>builder.image(source);

export default client