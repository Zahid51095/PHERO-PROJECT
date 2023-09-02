const sortVideosByViews = (data) => {
    data.sort((a, b) => {
      const viewA = parseFloat(a.others.views.replace("K", "")); 
      const viewB = parseFloat(b.others.views.replace("K", ""));
      return viewB - viewA; 
    });
    return data;
  };


  