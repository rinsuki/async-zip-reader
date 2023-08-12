import { describe, it, expect } from "vitest"

import { fileName, parentDirName } from "./utils"

describe("parentDirName", () => {
    it("should return parent dir", () => {
        expect(parentDirName("a/b/c")).toMatchInlineSnapshot('"a/b/"')
        expect(parentDirName("a/b")).toMatchInlineSnapshot('"a/"')
        expect(parentDirName("a")).toMatchInlineSnapshot('""')
    })
})

describe("fileName", () => {
    it("should return file name", () => {
        expect(fileName("test.js")).toMatchInlineSnapshot('"test.js"')
        expect(fileName("a/test.js")).toMatchInlineSnapshot('"test.js"')
    })
})
