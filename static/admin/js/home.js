$(document).ready(function () {
    $('#xuanhuan').bootstrapTable({
        url: '/getbook',         //请求后台的URL（*）
        method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        showHeader:false,                     //default:true 是否显示列头,字段名称那一排
        showFooter:false,                    //default:false 是否显示列脚
        queryParams: function(params){
            var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                limit: params.limit,   //页面大小
                offset:params.offset,
                key:$(".search input").val()
            };
            return temp;
        },
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 20,                       //每页的记录行数（*）
        pageList: [20, 50, 100, 150],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        contentType: "application/x-www-form-urlencoded",
        strictSearch: true,
        showColumns: false,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行

        //height: 1000,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "no",                     //每一行的唯一标识，一般为主键列
        showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                   //是否显示父子表
        classes:'table table-hover',        //表格的类名称。默认情况下，表格是有边框的，你可以添加 ‘table-no-bordered’ 来删除表格的边框样式。
        columns: [
            {
                field: 'BookName',
                title: '名称',
                formatter:function (value, row, index) {//formatter格式化单元格内容,value当前列的本来值，row当前行的数据{id:1,name:""...},index序号从0开始计数
                    return "<a href='/list/"+row.Id+"'>"+value+"</a>"
                },
                //footerFormatter:function (row) {} //格式化footer内容，function(rows)，rows：所有行数据
            },{
                field: 'BookNewChapter',
                title: '最新章节',
                formatter:function (value, row, index) {
                    return "<a href='/article/"+row.Id+"/"+row.LastId+"'>"+value+"</a>"
                }
            }, {
                field: 'BookAuthor',
                title: '作者'
            },{
                field: 'BookLastAtTxt',
                title: '时间'
            }
        ],
        rowStyle: function (row, index) {
            var classesArr = ['success', 'info'];
            var strclass = "";
            if (index % 2 === 0) {//偶数行
                strclass = classesArr[0];
            } else {//奇数行
                strclass = classesArr[1];
            }
            return { classes: strclass };
        },//隔行变色
    })
});





