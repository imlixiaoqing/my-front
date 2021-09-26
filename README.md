# 项目说明

## git

1. git init
2. git add .
3. git commit -m "你的发布commit"
4. git remote add origin 你的工程链接，如 (https://github.com/XXX/XXX.git)
5. git push -u origin master

### 8.13

https://blog.csdn.net/qq_42714262/article/details/119706383

* 运行一下命令缓存
  * git config --global credential.helper wincred
* 清除掉缓存在git中的用户名和密码
  * git credential-manager uninstall
* 重新push
  * git push -u origin master
* 密码输入生成的令牌
  * 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
