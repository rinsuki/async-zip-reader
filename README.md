# async-zip-reader

with async-zip-reader, you can read zip files content without store entire file to memory (only on user-provided file or read from HTTP Range request supported server).

## Usage

```ts
import { ZipReader, PassthroughBlobProvider } from "async-zip-reader"

const input = document.querySelector("input[type=file]")
input.addEventListener("change", () => {
    const zip = await ZipReader.init(new PassthroughBlobProvider(input.files[0]))
    alert("Files:\n" + zip.files.map(file => file.fileName).join("\n"))
    const firstFile = zip.extract(zip.files[0])
    const a = document.createElement("a")
    a.href = URL.createObjectURL(firstFile)
    a.target = "_blank"
    a.click()
})
```
