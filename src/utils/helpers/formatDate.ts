
import { format, type Locale } from 'date-fns';
import { enUS } from 'date-fns/locale';

export type DateFormatType = 'short' | 'long' | 'full' | 'custom';

/**
 * Universal date formatting function.
 *
 * @param date - Date object or valid date string.
 * @param formatType - Type of formatting ('short', 'long', 'full', or 'custom').
 * @param customFormat - Custom format string (used only if formatType is 'custom').
 * @param locale - Locale for formatting (default: enUS, optional: uk).
 * @returns Formatted date string.
 */
export const formatDate = (
  date: Date | string,
  formatType: DateFormatType = 'long',
  customFormat?: string,
  locale: Locale = enUS
): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  switch (formatType) {
    case 'short':
      return format(parsedDate, 'MM/dd/yyyy', { locale });
    case 'long':
      return format(parsedDate, 'dd MMMM yyyy', { locale });
    case 'full':
      return format(parsedDate, 'EEEE, dd MMMM yyyy, HH:mm:ss', { locale });
    case 'custom':
      if (!customFormat)
        throw new Error(
          'Custom format string is required for formatType "custom"'
        );
      return format(parsedDate, customFormat, { locale });
    default:
      throw new Error(`Unsupported format type: ${formatType}`);
  }
};
