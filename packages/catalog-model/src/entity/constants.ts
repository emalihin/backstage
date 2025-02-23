/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The namespace that entities without an explicit namespace fall into.
 *
 * @public
 */
export const ENTITY_DEFAULT_NAMESPACE = 'default';

/**
 * The keys of EntityMeta that are auto-generated.
 *
 * @public
 * @deprecated will be removed in a future release.
 */
export const ENTITY_META_GENERATED_FIELDS = [
  'uid',
  'etag',
  'generation',
] as const;

/**
 * Annotation for linking to entity page from catalog pages.
 *
 * @public
 * @deprecated use {@link ANNOTATION_VIEW_URL} instead.
 */
export const VIEW_URL_ANNOTATION = 'backstage.io/view-url';

/**
 * Annotation for linking to entity edit page from catalog pages.
 *
 * @public
 * @deprecated use {@link ANNOTATION_EDIT_URL} instead.
 */
export const EDIT_URL_ANNOTATION = 'backstage.io/edit-url';

/**
 * Annotation for linking to entity page from catalog pages.
 *
 * @public
 */
export const ANNOTATION_VIEW_URL = 'backstage.io/view-url';

/**
 * Annotation for linking to entity edit page from catalog pages.
 *
 * @public
 */
export const ANNOTATION_EDIT_URL = 'backstage.io/edit-url';
