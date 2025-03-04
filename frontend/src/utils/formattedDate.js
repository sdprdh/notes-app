const formattedDate = (isoString) => {
   return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   }).format(new Date(isoString));
};

export default formattedDate;
