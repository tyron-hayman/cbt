// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AiChatDocumentDataSlicesSlice = never;

/**
 * Content for AI Chat documents
 */
interface AiChatDocumentData {
  /**
   * Main Heading field in *AI Chat*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ai_chat.main_heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_heading: prismic.KeyTextField;

  /**
   * Subheading field in *AI Chat*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ai_chat.subheading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Disclaimer field in *AI Chat*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: ai_chat.disclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  disclaimer: prismic.KeyTextField;

  /**
   * Slice Zone field in *AI Chat*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: ai_chat.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AiChatDocumentDataSlicesSlice> /**
   * Meta Description field in *AI Chat*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: ai_chat.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *AI Chat*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: ai_chat.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *AI Chat*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: ai_chat.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * AI Chat document from Prismic
 *
 * - **API ID**: `ai_chat`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AiChatDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AiChatDocumentData>,
    "ai_chat",
    Lang
  >;

export type AllDocumentTypes = AiChatDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AiChatDocument,
      AiChatDocumentData,
      AiChatDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
