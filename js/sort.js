const sortVideosByViews = (data) => {
    data.sort((a, b) => {
      // Assuming 'views' is a property in each video object
      const viewA = parseFloat(a.others.views.replace("K", "")); // Convert views to numbers
      const viewB = parseFloat(b.others.views.replace("K", ""));
      return viewB - viewA; // Sort in descending order
    });
    return data;
  };


  