## PMS开发常见问题.
### 无法引入IDE
   检查工程下是否有*.project*文件没有则导入工程*eeospms\eeospms.product.util*
   运行Generator.java中的main方法,注意修改*template_path*和*project_path*的值,它会自动给你所有不能导入到IDE的工程创建依赖
### 带有web、service、dao开头的包路径错误
需要修改.classpath文件中的src配置
```xml
<classpathentry kind="src" path="src/web"/>
<classpathentry kind="src" path="src/service"/>
<classpathentry kind="src" path="src/dao"/>
```
### 工程打包
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- 根据自己的项目名称改name属性 -->
<project default="build" name="YxCzpWeb">
  <!--设置src目录-->
  <property name="src.dir" value="src" />
  <!--设置输出目录-->
  <property name="output.dir" value="target" />
  <!--设置输出jar包名字-->
  <property name="jarname" value="${ant.project.name}.jar" />

  <!-- 第三方jar包的路径 -->
  <path id="lib-classpath">
    <fileset dir="../../app/BusinessObject/bin">
      <include name="**/*.jar" />
    </fileset>
    <fileset dir="../../app/BusinessObject/lib">
      <include name="**/*.jar" />
    </fileset>
    <fileset dir="../../app/web/WEB-INF/lib">
      <include name="**/*.jar" />
    </fileset>
    <fileset dir="../../app/APP-INF/lib">
      <include name="**/*.jar" />
    </fileset>
    <fileset dir="../../app">
          <include name="**/*.jar" />
        </fileset>
  </path>
  <!-- 1. 初始化工作，如创建目录等 -->
  <target name="init">
    <mkdir dir="${output.dir}/classes" />
    <mkdir dir="${output.dir}" />
  </target>

  <!-- 2. 编译 -->
  <target name="compile" depends="init">
    <javac srcdir="${src.dir}" destdir="${output.dir}/classes" target="1.6">
      <compilerarg line="-encoding UTF-8" />
      <classpath refid="lib-classpath" />
    </javac>
  </target>

  <!-- 3. 打包jar文件 -->
  <target name="build" depends="compile">
    <!--  
      复制依赖jar
      <copy todir="${output.dir}/lib">
            <fileset dir="${lib.dir}"/>
        </copy> 
        -->
    <pathconvert property="mf.classpath" pathsep=" ">
      <mapper>
        <chainedmapper>
          <!-- jar包文件只留文件名，去掉目录信息 -->
          <flattenmapper />
          <!-- add lib/ prefix -->
          <globmapper from="*" to="lib/*" />
        </chainedmapper>
      </mapper>
      <path refid="lib-classpath" />
    </pathconvert>

    <!-- jar文件的输出路径 -->
    <jar destfile="${output.dir}/${jarname}" basedir="${output.dir}/classes">
      <manifest>
        <attribute name="Class-Path" value="${jarname}" />
      </manifest>
    </jar>
  </target>
</project>
```

### 三层打包
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- 根据自己的项目名称改name属性 要和app已有的名称对应 -->
<project default="build-web" name="rm-flaw">
    <!--设置src目录-->
    <property name="src.dir" value="src" />
    <!--设置输出目录-->
    <property name="output.dir" value="target" />
    <!--设置输出jar包名字-->
    <property name="dao-jarname" value="${ant.project.name}-dao.jar" />
    <property name="web-jarname" value="${ant.project.name}-web.jar" />
    <property name="service-jarname" value="${ant.project.name}-service.jar" />
    <!-- 第三方jar包的路径 -->
    <path id="lib-classpath">
        <fileset dir="../../app/BusinessObject/bin">
            <include name="**/*.jar" />
        </fileset>
        <fileset dir="../../app/BusinessObject/lib">
            <include name="**/*.jar" />
        </fileset>
        <fileset dir="../../app/web/WEB-INF/lib">
            <include name="**/*.jar" />
        </fileset>
        <fileset dir="../../app/APP-INF/lib">
            <include name="**/*.jar" />
        </fileset>
        <fileset dir="../../app">
            <include name="**/*.jar" />
        </fileset>
    </path>
    <!-- 1. 初始化工作，如创建目录等 -->
    <target name="init">
        <mkdir dir="${output.dir}/classes" />
        <mkdir dir="${output.dir}/classes/web" />
        <mkdir dir="${output.dir}/classes/service" />
        <mkdir dir="${output.dir}/classes/dao" />
        <mkdir dir="${output.dir}" />
    </target>
    <!-- 2. 编译 -->
    <target name="compile" depends="init">
        <javac srcdir="${src.dir}/web" destdir="${output.dir}/classes/web" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
        <javac srcdir="${src.dir}/dao" destdir="${output.dir}/classes/dao" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
        <javac srcdir="${src.dir}/service" destdir="${output.dir}/classes/service" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
    </target>
    <!-- 3. 打包jar文件 -->
    <target name="build-web" depends="init">
        <javac srcdir="${src.dir}/web" destdir="${output.dir}/classes/web" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
        <pathconvert property="mf.classpath" pathsep=" ">
            <mapper>
                <chainedmapper>
                    <!-- jar包文件只留文件名，去掉目录信息 -->
                    <flattenmapper />
                    <!-- add lib/ prefix -->
                    <globmapper from="*" to="lib/*" />
                </chainedmapper>
            </mapper>
            <path refid="lib-classpath" />
        </pathconvert>
        <!-- jar文件的输出路径 -->
        <jar destfile="${output.dir}/${web-jarname}" basedir="${output.dir}/classes/web">
            <manifest>
                <attribute name="Class-Path" value="${web-jarname}" />
            </manifest>
        </jar>
        <copyfile src="${output.dir}/${web-jarname}" dest="../../app/web/WEB-INF/lib/${web-jarname}" />
        <echo message="Release OK!!!!!!" />
    </target>
    <!-- 3. 打包jar文件 -->
    <target name="build-dao">
        <javac srcdir="${src.dir}/dao" destdir="${output.dir}/classes/dao" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
        <pathconvert property="mf.classpath" pathsep=" ">
            <mapper>
                <chainedmapper>
                    <!-- jar包文件只留文件名，去掉目录信息 -->
                    <flattenmapper />
                    <!-- add lib/ prefix -->
                    <globmapper from="*" to="lib/*" />
                </chainedmapper>
            </mapper>
            <path refid="lib-classpath" />
        </pathconvert>
        <jar destfile="${output.dir}/${dao-jarname}" basedir="${output.dir}/classes/dao">
            <manifest>
                <attribute name="Class-Path" value="${dao-jarname}" />
            </manifest>
        </jar>
        <copyfile src="${output.dir}/${dao-jarname}" dest="../../app/BusinessObject/bin/${dao-jarname}" />
        <echo message="Release OK!!!!!!" />
    </target>
    <!-- 3. 打包jar文件 -->
    <target name="build-service">
        <javac srcdir="${src.dir}/service" destdir="${output.dir}/classes/service" target="1.6">
            <compilerarg line="-encoding UTF-8" />
            <classpath refid="lib-classpath" />
        </javac>
        <pathconvert property="mf.classpath" pathsep=" ">
            <mapper>
                <chainedmapper>
                    <!-- jar包文件只留文件名，去掉目录信息 -->
                    <flattenmapper />
                    <!-- add lib/ prefix -->
                    <globmapper from="*" to="lib/*" />
                </chainedmapper>
            </mapper>
            <path refid="lib-classpath" />
        </pathconvert>
        <jar destfile="${output.dir}/${service-jarname}" basedir="${output.dir}/classes/service">
            <manifest>
                <attribute name="Class-Path" value="${service-jarname}" />
            </manifest>
        </jar>
        <copyfile src="${output.dir}/${service-jarname}" dest="../../app/BusinessObject/bin/${service-jarname}" />
        <echo message="Release OK!!!!!!" />
    </target>
</project>
```
### 无法使用showMsg方法
检查jsp尾部是否引入了
```html
<%@include file="../../common/footer.jsp" %>*
```
且需要和头部引入Header路径保持一致
```html
 <%@include file="../../common/header.jsp"%>
```
### 查询工单目前状态、处理人员
```sql
--根据工单号 或者其他条件先查第一个SQL 得到taskId 然后查询第二个SQL
select * from wf_amber.indywf_worklist_cur c where item_key='171220616081';--3712578
select * from wf_amber.indysp_task_user_cur  c where c.taskid = '3712578'
```