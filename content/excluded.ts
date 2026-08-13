/**
 * Media that must never be published or shipped in a download archive.
 *
 * IMG_2841 is a photographed administrative-fine receipt carrying a full name,
 * a home address, and a document number. Keep it out of public/ entirely.
 *
 * The same list is mirrored in scripts/excluded.json so the conversion and
 * manifest scripts skip these files as well.
 */
export const excludedIds: string[] = ["IMG_2841"];
