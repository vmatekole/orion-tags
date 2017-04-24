orion.attributes.registerAttribute('tags', {
  template: 'orionAttributeTags',
  previewTemplate: 'orionAttributeTagsPreview',
  getSchema: function(options) {
      return {
          type: [String]
      };
  },
  valueOut: function() {
      // A HACK to maintain order
      tags = this.siblings('.bootstrap-tagsinput').find('.tag');
      if (!tags)
        return;
      result = [];
      _.each(tags, function(item) {
        result.push($(item).text());
      })
      return result;
  },
});
