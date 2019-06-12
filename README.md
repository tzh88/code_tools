# code_tools
首先确保 你的mac中有已解锁workflow 的 alfred
输入  字段名，字段类型，子弹说明。就可以自动生成相应代码段。

例子：在alfred搜索栏中输入  bean createTime,s,创建时间(bean:热键，createTime:字段名s代表字段类型为字符串类型，创建时间:字段注释)    按回车就能出书如下代码：
    /**
     * 创建时间
     */
    private _createTime: string;

    /**
    * 创建时间
    */
    public get createTime(): string {
        return this._createTime;
    }

    /**
    * 创建时间
    */
    public set createTime(value: string) {
        this._createTime = value;
    }
