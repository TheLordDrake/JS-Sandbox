// Using document.write() after an HTML document is loaded, will delete all existing HTML:
// It should only ever be used for testing.
function writeDoc()
{
    document.write(5 + 6);
}