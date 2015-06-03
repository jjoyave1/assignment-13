this["template"] = this["template"] || {};
this["template"]["temp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class = \"box-wrapper\">\n\n  <header>\n\n   <div class = \"fa-stack fa-lg icons\">\n      <i class=\"fa fa-circle fa-stack-2x outer\"></i>\n      <i class=\"fa fa-circle fa-stack-2x inner\"></i>\n      <i class=\"fa "
    + alias3(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + " fa-stack-1x fa-inverse\"></i>\n    </div>\n\n\n    <div class = \"logBox\">\n      <p>"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p>\n      <h2 class = \"timelog\">"
    + alias3(((helper = (helper = helpers.times || (depth0 != null ? depth0.times : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"times","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n  </header>\n\n  <div class = \"postBox\">\n\n    <div class=\"textWrap\">\n    <div class = \"titleWrap\"><div class=\"timeCone\"></div>\n    <h2 class = \"postTitle\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2></div>\n\n    <p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n  </div>\n\n</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timelines : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});