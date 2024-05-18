/* Trim function */
  const trimText = (description, numberOfWords) => {
      const wordsArray = description.split(" ");

      const trimmedDescription = wordsArray.slice(0, numberOfWords);
      return trimmedDescription.join(" ") + " ...";
  }
