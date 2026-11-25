/**
 * Centralized Form Configuration for Evergreen Landscapes
 * Integrating MyFormConnect / MyFormCapture endpoints.
 */

export const FORM_URLS = {
  enquiry: 'https://myformcapture.com/f/116ef20f-1391-4133-9f53-f2813b89e3db',
  booking: 'https://myformcapture.com/f/8363d4a9-e0bd-44f3-bd51-ff8a180b485e',
} as const;

export const BOOKING_CONFIG = {
  uuid: '8363d4a9-e0bd-44f3-bd51-ff8a180b485e',
  apiBase: 'https://myformcapture.com',
  submitUrl: 'https://myformcapture.com/f/8363d4a9-e0bd-44f3-bd51-ff8a180b485e',
  slotsUrl: 'https://myformcapture.com/f/8363d4a9-e0bd-44f3-bd51-ff8a180b485e/slots',
  meetingTitle: 'Landscaping Consultation',
  meetingDescription: 'Discuss your garden, outdoor space, and landscaping requirements.',
  meetingDuration: 30,
  brandingName: 'MyFormConnect',
  brandingUrl: 'https://myformcapture.com',
} as const;

export const COMPANY_INFO = {
  name: 'Evergreen Landscapes',
  tagline: 'Thoughtful landscapes. Beautiful outdoor living.',
  proposition: 'Transform your outdoor space into something extraordinary. From garden design to complete landscape installations, we bring your vision to life.',
  email: 'hello@evergreenlandscapes.example',
  phone: '+1 (555) 010-3030',
  hours: 'Monday–Friday: 8:00 AM – 6:00 PM | Saturday: 9:00 AM – 2:00 PM',
  address: '428 Timberland Way, Green Hills, OR 97201',
  trustStatement: 'Residential & Commercial Landscaping | Design | Installation | Maintenance',
  attribution: {
    text: 'Powered by MyFormConnect',
    url: 'https://myformcapture.com',
  },
} as const;
