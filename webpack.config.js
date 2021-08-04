

{
    test: /\.mp4$/,
    use: 'file-loader?name=videos/[name].[ext]',
}

// {
//     test: /\.mp4$/,
//     use: [
//         {
//             loader: "file-loader",
//             options: {
//                 name: "[name].[ext]",
//                 outputPath: "video"
//             }
//         }
//     ]
// }
