/**
 * @fileOverview このファイル内の型は過信しないでください、あくまでこのファイルが作成・編集したときに確認されたAPIのレスポンスの型です
 *     変更されてる可能性があります
 */

import { Document } from "@contentful/rich-text-types";

export interface BlogPost {
    sys: Sys;
    fields: Fields;
}

interface Sys {
    space: Space;
    id: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    environment: Environment;
    revision: number;
    contentType: ContentType;
    locale: string;
}

interface Space {
    sys: Sys2;
}

interface Sys2 {
    type: string;
    linkType: string;
    id: string;
}

interface Environment {
    sys: Sys3;
}

interface Sys3 {
    id: string;
    type: string;
    linkType: string;
}

interface ContentType {
    sys: Sys4;
}

interface Sys4 {
    type: string;
    linkType: string;
    id: string;
}

interface Fields {
    title: string;
    body: Document;
    images: Image[];
}

interface Image {
    sys: Sys5;
}

interface Sys5 {
    type: string;
    linkType: string;
    id: string;
}