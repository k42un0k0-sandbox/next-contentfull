/**
 * @fileOverview このファイル内の型は過信しないでください、あくまでこのファイルが作成・編集したときに確認されたAPIのレスポンスの型です
 *     変更されてる可能性があります
 */

import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";

export type BlogPostField = {
    title: string;
    body: Document;
    images: Image[];
}

export type BlogPost = Entry<BlogPostField>

interface Image {
    sys: Sys5;
}

interface Sys5 {
    type: string;
    linkType: string;
    id: string;
}