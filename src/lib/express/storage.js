export default (app)=> {

    app.use("/public/assets", express.static(path.join(__dirname, "..", "public", "assets")))
    app.get("/public/uploads/*", async (req, res) => {
        try {
            let destination = path.join(__dirname, "..", req._parsedUrl?.pathname.split('/').filter((item) => item !== "").join("/"))
            if (fs.existsSync(destination)) {
                if (QueryResolve(req.query, "is_download") && ToBoolean(QueryResolve(req.query, "is_download")) === true) {
                    const disposition = 'attachment; filename="' + "static-download" + '"';
                    res.setHeader('Content-Disposition', disposition);
                    return res.download(destination)
                }

                if(QueryResolve(req.query,'convert_base_64') && ToBoolean(QueryResolve(req.query,'convert_base_64')) === true){

                    const contents = fs.readFileSync(destination, {encoding: 'base64'})
                    return res.send(contents)
                }

                return res.sendFile(destination)

            } else {
                return res.render('error', {title: "Error!", message: 'Path notfound'})
            }
        } catch (err) {
            return res.render('error', {title: "Error!", message: err?.message ?? "Some Error"})
        }
    })
}